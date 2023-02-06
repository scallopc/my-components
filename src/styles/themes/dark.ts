import colors from "../colors";

export default {
  title: "dark",

  default: {
    background: colors.default.vdscDarkHighColor,
    bgAlternative1: colors.default.vdscDarkMediumColor,
    bgAlternative2: colors.default.vdscDarkMediumColor,
    color: colors.primary.white,
    colorAlternative1: colors.default.vdscAuxiliaryBlue400,
    colorAlternative2: colors.default.vdscDarkLowColor,
    colorAlternative3: colors.default.vdscAuxiliaryBlueMediumColor,
    colorAlternative4: colors.default.vdscAuxiliaryBlueLowColor,
    border: colors.default.vdscDarkMediumColor,
    disabled: colors.default.vdscDarkLowColor,
    border100: colors.default.vdscAuxiliaryGrayLowColor,
  },

  input: {
    borderHover: colors.default.vdscAuxiliaryBlue400,
    color: colors.primary.white,
    colorAlternative1: colors.default.vdscDarkLowColor,
    colorAlternative2: colors.default.vdscDarkMediumColor,
    disabled: colors.default.vdscAuxiliaryDisabledLowColor,
    bgInput: colors.default.vdscDarkHighColor,
    colorAutoComplete: colors.primary.black,
    colorAutoCompleteHover: colors.primary.white,
    bgAutoCompleteHover: colors.default.vdscAuxiliaryBlueMediumColor,

    icon: {
      color: colors.default.vdscDarkLowColor,
    }
  },

  button: {
    colorBtnPrimary: colors.primary.white,
    bgBtnPrimary: colors.default.vdscAuxiliaryBlue400,
    bgBtnPrimaryHover: colors.default.vdscAuxiliaryBlueMediumColor,
    bgBtnPrimaryFocus: colors.default.vdscAuxiliaryBlueHighColor,
    colorBtnOutline: colors.default.vdscAuxiliaryBlue400,
    bgBtnOutlineHover: colors.default.vdscAuxiliaryBlueMediumColor,
    colorBtnOutlineHover: colors.primary.white,
    bgBtnOutlineFocus: colors.default.vdscAuxiliaryBlueHighColor,
    bgBtnDisabled: colors.default.vdscDarkMediumColor,
    colorBtnDisabled: colors.default.vdscEleeva2Color,
    borderBtnText: colors.default.vdscDarkMediumColor,
    bgHover: colors.default.vdscAuxiliaryBlue100,
  },

  table: {
    colorTable: colors.primary.white,
    colorTableTr: colors.primary.white,
    bgTableTr: colors.default.vdscDarkMediumColor,
    borderBottomTable: colors.default.vdscDarkLowColor,
    outlineTableFocus: colors.default.vdscDarkHighColor,
    bgTableFocus: colors.default.vdscDarkHighColor,
    borderCB: colors.default.vdscLightHighColor,
    borderCBHover: colors.default.vdscAuxiliaryBlueMediumColor,
    
  },

  toggle: {
    colorActive: colors.default.vdscAuxiliaryBlue400,
    colorDisabled: colors.default.vdscDarkLowColor,
  },

  scrollbar: {
    colorTrack: colors.default.vdscDarkMediumColor,
    colorThumb: colors.default.vdscAuxiliaryBlueMediumColor,
    colorThumbHover: colors.default.vdscAuxiliaryBlueLowColor,
  },

  line: {
    color: colors.default.vdscDarkLowColor,
  },

  iconDefaultFak: {
    color: colors.default.vdscAuxiliaryGrayLowColor,
  },

  dropTenant: {
    background: colors.default.vdscDarkMediumColor,
    color: colors.default.vdscDarkMediumColor,
  }
};
