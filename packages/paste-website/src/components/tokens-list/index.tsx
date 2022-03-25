import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Stack} from '@twilio-paste/stack';
import {Label} from '@twilio-paste/label';
import {Heading} from '@twilio-paste/heading';
import {Card} from '@twilio-paste/card';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import {Table, Tr, Th, Td, THead, TBody} from '@twilio-paste/table';
import {Text} from '@twilio-paste/text';
import {useUID} from '@twilio-paste/uid-library';
import type {ThemeVariants} from '@twilio-paste/theme';
import {navigate, useLocation} from '@reach/router';
import {InlineCode} from '../Typography';
import {AnchoredHeading} from '../Heading';
import {Callout, CalloutTitle, CalloutText} from '../callout';
import {TokenExample} from './TokensExample';
import {getTokenValue} from './getTokenValue';
import {useDarkModeContext} from '../../context/DarkModeContext';

const debounce = require('lodash/debounce');

const sentenceCase = (catName: string): string => {
  return catName
    .split('-')
    .join(' ')
    .replace(/[a-z]/i, (letter): string => {
      return letter.toUpperCase();
    });
};

interface Token {
  name: string;
  value: string;
  comment: string;
  category: string;
  type: string;
  deprecated: boolean;
}

interface TokenCategory {
  categoryName: string;
  info?: React.ReactNode;
  tokens: Token[];
}

interface TokensShape {
  node: {
    tokens: TokenCategory[];
  };
}

interface TokensListProps {
  children?: React.ReactElement;
  defaultTokens: TokensShape[];
  darkTokens: TokensShape[];
}

const filterDeprecatedTokens = (tokens: TokenCategory[]): TokenCategory[] => {
  return tokens.map((category) => {
    return {...category, tokens: [...category.tokens.filter((token) => !token.deprecated)]};
  });
};

const getTokensByTheme = (props: TokensListProps, theme: ThemeVariants): TokenCategory[] => {
  const unfilteredTokensBasedOnTheme =
    theme === 'default' ? props.defaultTokens[0].node.tokens : props.darkTokens[0].node.tokens;
  let tokens = [] as TokenCategory[];

  if (unfilteredTokensBasedOnTheme != null) {
    tokens = filterDeprecatedTokens(unfilteredTokensBasedOnTheme);
  }

  const fontSize = tokens.find((ele) => ele.categoryName === 'font-sizes');
  if (fontSize) {
    fontSize.info = (
      <Callout>
        <CalloutTitle as="h4">Heads up about font sizes in Paste!</CalloutTitle>
        <CalloutText>
          Font-sizes in our Paste tokens use rem values. Unlike em values which are relative to their parent element,
          rem values are relative to the html element. If you aren&apos;t using the Theme.Provider component, you must
          set font-size: 100%; on your page&apos;s html tag for the font-sizes to be sized correctly as 1rem=16px.
        </CalloutText>
      </Callout>
    );
  }

  return tokens;
};

const collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});

const trackTokenFilterString = debounce((filter: string): void => {
  if (filter !== '') {
    trackCustomEvent({
      category: 'Design Tokens',
      action: 'filter',
      label: filter,
    });
  }
}, 500);

export const TokensList: React.FC<TokensListProps> = (props) => {
  const {theme} = useDarkModeContext();
  const location = useLocation();
  const initialFilterString = location.search.match(/=(.*)$/) ? location.search.match(/=(.*)$/)[1] : '';
  const [filterString, setFilterString] = React.useState(initialFilterString);
  const [tokens, setTokens] = React.useState<TokenCategory[] | null>(getTokensByTheme(props, theme));

  React.useEffect(() => {
    setTokens(getTokensByTheme(props, theme));
  }, [theme]);

  const filterTokenList = (filter: string): void => {
    setTokens(() => {
      const newTokenCategories = getTokensByTheme(props, theme).map(
        (category): TokenCategory => {
          const newTokens = category.tokens.filter((token) => {
            return token.name.includes(filter) || token.value.includes(filter);
          });
          return {...category, tokens: newTokens};
        }
      );
      const filteredCategories = newTokenCategories.filter((category) => {
        return category.tokens.length > 0;
      });
      if (filteredCategories.length > 0) {
        return filteredCategories;
      }
      return null;
    });
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
    filterTokenList(filter);
    trackTokenFilterString(filter);
    if (filter === '') navigate(window.location.pathname, {replace: true});
    else navigate(`?tokens-filter=${filter}`, {replace: true});
  };

  const uid = useUID();

  return (
    <>
      <Box as="div" marginTop="space100" marginBottom="space100" maxWidth="size40">
        <Label htmlFor={uid}>Filter tokens</Label>
        <Input
          autoComplete="off"
          id={uid}
          onChange={handleInput}
          placeholder="filter by name or value"
          type="text"
          value={filterString}
          name="tokens-filter"
        />
      </Box>
      {tokens != null ? (
        tokens.map((cat) => {
          return (
            <React.Fragment key={`catname${cat.categoryName}`}>
              <AnchoredHeading as="h2" variant="heading20">
                {sentenceCase(cat.categoryName)}
              </AnchoredHeading>
              {cat.info}
              <Box marginBottom="space160" data-cy="tokens-table-container">
                <Table scrollHorizontally>
                  <THead>
                    <Tr>
                      <Th>Token</Th>
                      <Th width="250px">Value</Th>
                      <Th width="250px">Example</Th>
                    </Tr>
                  </THead>
                  <TBody>
                    {cat.tokens
                      .sort((a, b) => {
                        if (cat.categoryName === 'font-weights') {
                          return collator.compare(a.value, b.value);
                        }
                        return collator.compare(a.name, b.name);
                      })
                      .map((token: Token) => {
                        return (
                          <Tr key={`token${token.name}`}>
                            <Td>
                              <Text as="p" marginBottom="space30">
                                <InlineCode>${token.name}</InlineCode>
                              </Text>
                              <Text as="p">{token.comment}</Text>
                            </Td>
                            <Td>{getTokenValue(token)}</Td>
                            <Td>
                              <TokenExample token={token} />
                            </Td>
                          </Tr>
                        );
                      })}
                  </TBody>
                </Table>
              </Box>
            </React.Fragment>
          );
        })
      ) : (
        <Card>
          <Stack orientation="horizontal" spacing="space70">
            <Box
              as="img"
              src="/images/patterns/empty-no-results-found.png"
              alt="No results found illustration"
              size="size20"
            />
            <Stack orientation="vertical" spacing="space40">
              <Heading as="h3" variant="heading30">
                Oh no! We couldn&apos;t find any matches
              </Heading>
              <Text as="span">
                Try clearing your search and using another query to find the token you&apos;re looking for.
              </Text>
              <Button
                variant="secondary"
                onClick={() => {
                  setFilterString('');
                }}
              >
                Clear search
              </Button>
            </Stack>
          </Stack>
        </Card>
      )}
    </>
  );
};
