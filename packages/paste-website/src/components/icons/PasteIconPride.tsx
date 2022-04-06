import * as React from 'react';
import type {Property} from 'csstype';
import {useUID} from '@twilio-paste/uid-library';

export interface PasteIconPrideProps {
  decorative?: boolean;
  size?: number;
  title?: string;
  display?: Property.Display;
  opacity?: Property.Opacity;
  transition?: Property.Transition;
}

const PasteIconPride = React.memo(
  ({title = 'Twilio Paste', decorative = true, display, size, opacity, transition}: PasteIconPrideProps) => {
    const titleId = `paste-icon-${useUID()}`;
    return (
      <span style={{display, opacity, transition, width: size, height: size}}>
        <svg
          role="img"
          aria-hidden={decorative}
          width="100%"
          height="100%"
          aria-labelledby={titleId}
          viewBox="7 7 42 42"
        >
          {title ? <title id={titleId}>{title}</title> : null}
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207v35.585A3.208 3.208 0 0145.792 49H10.208A3.208 3.208 0 017 45.792V10.208A3.208 3.208 0 0110.207 7z"
            fill="#7D60A9"
          />
          <path
            d="M45.792 7H10.208A3.208 3.208 0 007 10.207v35.176c5.786-1.085 11.31.743 16.505 3.617h22.287A3.208 3.208 0 0049 45.792V10.208A3.208 3.208 0 0045.792 7z"
            fill="#4582C3"
          />
          <path
            d="M45.792 7H10.208A3.208 3.208 0 007 10.207V39.08c7.262-1.55 14.277 1.436 20.717 5.36l.442.271c2.207 1.362 4.358 2.81 6.488 4.29h11.145A3.205 3.205 0 0049 45.792V10.208A3.208 3.208 0 0045.792 7zM23.505 49h.006C18.313 46.127 12.787 44.298 7 45.383c5.786-1.085 11.31.743 16.505 3.617z"
            fill="#59BC72"
          />
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207v35.585c0 1.163-.618 2.181-1.544 2.744l.013-.008c-2.52-1.401-4.993-2.89-7.466-4.377-3.657-2.201-7.316-4.403-11.127-6.323-7.082-3.57-14.534-5.81-21.876-3.423V10.207A3.208 3.208 0 0110.207 7zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383z"
            fill="#EFDC2F"
          />
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207v30.857c-2.328-1.073-4.705-2.274-7.115-3.492C30.48 31.809 18.32 25.665 7 30.87V10.207A3.208 3.208 0 0110.207 7zM7 34.405zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383z"
            fill="#F47C20"
          />
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207v26.214c-2.653-1.067-5.368-2.32-8.119-3.588C29.588 27.624 17.693 22.138 7 28.027v-17.82A3.208 3.208 0 0110.207 7z"
            fill="#EE3248"
          />
          <path
            d="M7 30.87c2.745-1.262 5.539-1.857 8.36-1.952-2.821.095-5.615.69-8.36 1.951zM7 34.405a20.465 20.465 0 016.786-.986c5.071.1 10.125 1.915 15.007 4.367-4.88-2.452-9.935-4.267-15.007-4.367A20.46 20.46 0 007 34.405zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383z"
            fill="#EE3248"
          />
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207V34.94c-3.307-1.254-6.807-3.013-10.409-4.822C28.181 24.886 16.918 19.227 7 24.08V10.208A3.208 3.208 0 0110.207 7zM7 30.87c2.628-1.209 5.302-1.805 8-1.937-2.698.132-5.372.728-8 1.936zM7 34.405zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383z"
            fill="#C08656"
          />
          <path
            d="M45.792 7H10.208A3.208 3.208 0 007 10.207v9.812c6.139-2.275 12.81-.924 19.15 1.337 3.312 1.18 6.54 2.585 9.766 3.99 4.203 1.83 8.405 3.659 12.792 4.991.097.03.195.06.292.088V10.207A3.208 3.208 0 0045.792 7z"
            fill="#414042"
          />
          <path
            d="M49 34.938c-3.307-1.255-6.807-3.013-10.408-4.822-8.523-4.283-17.616-8.851-26.074-7.704 8.459-1.146 17.551 3.423 26.073 7.705 3.602 1.81 7.102 3.568 10.409 4.822v-.001zM7 30.87c2.653-1.22 5.352-1.817 8.077-1.94-2.725.123-5.424.72-8.077 1.94zM7 34.405zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383z"
            fill="#414042"
          />
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207v14.026c-4.396-.953-8.683-2.31-12.97-3.669-3.291-1.043-6.583-2.085-9.924-2.945-6.309-1.624-12.923-2.641-19.106-.785v-6.627A3.208 3.208 0 0110.207 7zM7 30.87zM7 34.405zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383zM49 34.94v-.002c-3.307-1.255-6.807-3.013-10.408-4.822-8.523-4.283-17.616-8.851-26.074-7.704 8.459-1.146 17.551 3.423 26.073 7.705 3.602 1.81 7.102 3.568 10.409 4.822z"
            fill="#97CCEE"
          />
          <path
            d="M10.207 7h35.585A3.208 3.208 0 0149 10.207V17.6c-4.064-.524-8.095-1.262-12.126-2-3.415-.624-6.83-1.248-10.265-1.744-6.503-.937-13.212-1.48-19.609.029v-3.677A3.208 3.208 0 0110.207 7zM7 16.833c4.767-1.43 9.79-1.153 14.733-.207-4.94-.946-9.965-1.224-14.733.207zM7 30.87zM7 34.405zM7 45.383c5.786-1.085 11.31.743 16.505 3.617h22.287H23.51C18.314 46.127 12.787 44.298 7 45.383zM49 34.94v-.002c-3.307-1.255-6.807-3.013-10.408-4.822-8.523-4.283-17.616-8.851-26.074-7.704 8.458-1.146 17.55 3.423 26.073 7.705 3.602 1.81 7.102 3.568 10.409 4.822zM49 24.233z"
            fill="#FBD6E6"
          />
          <path
            d="M49 11.45c-3.596-.188-7.224-.48-10.866-.773C27.731 9.839 17.213 8.99 7 10.546v-.338A3.208 3.208 0 0110.207 7h35.585A3.208 3.208 0 0149 10.207v1.243z"
            fill="#FEF5F9"
          />
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.675 12.911h14.802a4.026 4.026 0 014.021 4.022v.01l-.002.233v10.41a4.045 4.045 0 01-4.04 4.04h-8.117l-4.223 9.463-.003.006a3.48 3.48 0 01-3.141 1.995h-.003a3.475 3.475 0 01-3.468-3.472v-6.53a4.045 4.045 0 011.114-2.783 4.026 4.026 0 01-1.06-2.718v-.008l.098-10.65v-.003a4.026 4.026 0 014.022-4.015zm0 2.579a1.446 1.446 0 00-1.444 1.444v.008l-.097 10.65a1.447 1.447 0 001.445 1.438h5.097l6.04-13.54h-11.04zm15.1.108a1.462 1.462 0 00-1.639.795L28.498 29.03h6.88a1.446 1.446 0 001.444-1.444v-.007l.095-10.419v-.135a1.462 1.462 0 00-1.141-1.427zM20.544 31.627a1.464 1.464 0 00-1.463 1.462v6.527a.892.892 0 001.694.389l3.739-8.378h-3.97z"
              fill="#fff"
            />
          </g>
          <defs>
            <filter
              x=".501"
              y=".911"
              width="54.997"
              height="62.179"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="8" />
              <feColorMatrix values="0 0 0 0 0.0705882 0 0 0 0 0.109804 0 0 0 0 0.176471 0 0 0 0.2 0" />
              <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </span>
    );
  }
);

export {PasteIconPride};
