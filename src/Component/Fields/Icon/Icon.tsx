/* eslint-disable jsx-a11y/alt-text */
import React, { FC, SVGProps, useEffect, useRef } from 'react';

import styles from './Icon.module.scss';

export type IconNamesTypes = 'eyeIcon' | 'hideEyeIcon';

type IconProps = {
  size?: number | string;
  name: IconNamesTypes | string;
  className?: string;
  onClick?: any;
  color?: string;
};

export const Icon = ({ name, size = 1, ...rest }: IconProps): any | null => {
  const ImportedIconRef = useRef<FC<SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      const def = await import(`./icons/${name}.svg`);
      ImportedIconRef.current = def.default;

      setLoading(false);
    };
    importIcon();
    return () => setLoading(false);
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;
    return (
      // @ts-ignore
      <span style={{ '--icon-size': size }} className={styles.Icon}>
        <span>
          <img src={ImportedIcon as any} {...rest} />
        </span>
      </span>
    );
  }
  return null;
};
