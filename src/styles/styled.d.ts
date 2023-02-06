import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    default: {
      background: string;
      color: string;
      bgAlternative1: string;
      bgAlternative2: string;
      color: string;
      colorAlternative1: string;
      colorAlternative2: string;
      colorAlternative3: string;
      colorAlternative4: string;
      border: string;
      disabled: string;
      border100: string;
    };

    input: {
      borderHover: string;
      color: string;
      bgTableTr: string;
      colorAlternative1: string;
      colorAlternative2: string;
      disabled: string;
      bgInput: string;
      colorAutoComplete: string;
      colorAutoCompleteHover: string;
      bgAutoCompleteHover: string;

      icon: {
        color: string;
      };
    };

    button: {
      colorBtnPrimary: string;
      bgBtnPrimary: string;
      bgBtnPrimaryHover: string;
      bgBtnPrimaryFocus: string;
      colorBtnOutline: string;
      bgBtnOutlineHover: string;
      colorBtnOutlineHover: string;
      bgBtnOutlineFocus: string;
      bgBtnDisabled: string;
      colorBtnDisabled: string;
      borderBtnText: string;
      bgHover: string;
    };

    table: {
      colorTable: string;
      colorTableTr: string;
      bgTableTr: string;
      borderBottomTable: string;
      outlineTableFocus: string;
      bgTableHover: string;
      bgTableHover: string;
      borderCB: string;
      borderCBHover: string;
    };

    toggle: {
        colorActive: string,
        colorDisabled: string,
      },
    
      scrollbar: {
        colorTrack: string,
        colorThumb: string,
        colorThumbHover: string,
      },
    
      line: {
        color: string,
      },
    
      iconDefaultFak: {
        color: string,
      },

      
    ddTenant: {
      background: string;
      color: string;
    };
  }
}
