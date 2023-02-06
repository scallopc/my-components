import colors from "../colors";

export default {
  title: "light",
 
  default: {
    background: colors.default.vdscBackground2Color,
    bgAlternative1: colors.primary.white,
    bgAlternative2: colors.primary.white,
    color: colors.default.vdscDarkHighColor,
    colorAlternative1: colors.default.vdscAuxiliaryBlue400,
    colorAlternative2: colors.default.vdscDarkMediumColor,
    colorAlternative3: colors.default.vdscAuxiliaryBlueMediumColor,
    colorAlternative4: colors.default.vdscAuxiliaryBlueLowColor,
    border: colors.default.vdscAuxiliaryGrayLowColor,
    disabled: colors.default.vdscLightHighColor,
    border100: colors.default.vdscAuxiliaryGrayLowColor,
  },

  input: {
    borderHover: colors.default.vdscAuxiliaryBlue400,
    color: colors.default.vdscDarkHighColor,
    colorAlternative1: colors.default.vdscAuxiliaryGrayLowColor,
    colorAlternative2: colors.default.vdscDarkLowColor,
    disabled: colors.default.vdscAuxiliaryDisabledLowColor,
    bgInput: colors.primary.white,
    colorAutoComplete: colors.primary.black,
    colorAutoCompleteHover: colors.primary.white,
    bgAutoCompleteHover: colors.default.vdscAuxiliaryBlueMediumColor,

    icon: {
      color: colors.default.vdscDarkHighColor,
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
    bgBtnDisabled: colors.default.vdscLightHighColor,
    colorBtnDisabled: colors.default.vdscEleeva2Color,
    borderBtnText: colors.default.vdscAuxiliaryGrayLowColor,
    bgHover: colors.default.vdscAuxiliaryBlue100,
  },

  table: {
    colorTable: colors.primary.black,
    colorTableTr: colors.primary.black,
    bgTableTr: colors.primary.white,
    borderBottomTable: colors.default.vdscAuxiliaryGrayLowColor,
    outlineTableFocus: colors.default.vdscAuxiliaryBlueMediumColor,
    bgTableHover: colors.default.vdscAuxiliaryBlue100,
    borderCB: colors.default.vdscAuxiliaryGrayLowColor,
    borderCBHover: colors.default.vdscAuxiliaryBlueMediumColor,
  },

  toggle: {
    colorActive: colors.default.vdscAuxiliaryBlue400,
    colorDisabled: colors.default.vdscAuxiliaryDisabledLowColor,
  },

  scrollbar: {
    colorTrack: colors.primary.white,
    colorThumb: colors.default.vdscAuxiliaryBlueMediumColor,
    colorThumbHover: colors.default.vdscAuxiliaryBlueLowColor,
  },

  line: {
    color: colors.default.vdscLightHighColor,
  },

  iconDefaultFak: {
    color: colors.default.vdscDarkHighColor,
  },

  dropTenant: {
    background: colors.default.vdscDarkMediumColor,
    color: colors.default.vdscDarkMediumColor,
  }
};
