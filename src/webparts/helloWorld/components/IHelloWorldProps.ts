import { DisplayMode } from "@microsoft/sp-core-library/lib";

export interface IHelloWorldProps {
  title: string;
  description: string;
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
}
