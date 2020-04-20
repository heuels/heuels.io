import { Context, createContext, h, ComponentChild } from 'preact';
import { useColorScheme } from './useColorScheme';

interface Props {
  children: ComponentChild;
}

const ColorSchemeContext = createContext(null) as Context<
  ReturnType<typeof useColorScheme>
>;

const ColorSchemeProvider = ({ children }: Props) => {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};

export { ColorSchemeProvider, ColorSchemeContext };
