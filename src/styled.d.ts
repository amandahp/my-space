
import 'styled-components';
import { ThemeType } from './styles/theme';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType { }
}
