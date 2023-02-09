import colors from "../colors";
import { dropdownColorsDark } from "./componentColor/dropdown";

const dark = {
  title: "dark",

  default: {
    background: colors.default.vdscDarkHighColor,
    bgAlternative1: colors.default.vdscDarkMediumColor,
    bgAlternative2: colors.default.vdscDarkMediumColor,
    color: colors.primary.white,
    colorAlternative1: colors.default.vdscAuxiliaryBlue400,
    colorAlternative2: colors.default.vdscEleeva2Color,
    colorAlternative3: colors.default.vdscAuxiliaryBlueMediumColor,
    colorAlternative4: colors.default.vdscAuxiliaryBlueLowColor,
    border: colors.default.vdscDarkMediumColor,
    disabled: colors.default.vdscDarkLow,
    border100: colors.default.vdscAuxiliaryGrayLowColor,
  },

  input: {
    borderHover: colors.default.vdscAuxiliaryBlue400,
    color: colors.primary.white,
    colorAlternative1: colors.default.vdscDarkLow,
    colorAlternative2: colors.default.vdscDarkMediumColor,
    disabled: colors.default.vdscAuxiliaryDisabledLowColor,
    bgInput: colors.default.vdscDarkHighColor,
    colorAutoComplete: colors.primary.black,
    colorAutoCompleteHover: colors.primary.white,
    bgAutoCompleteHover: colors.default.vdscAuxiliaryBlueMediumColor,

    icon: {
      color: colors.default.vdscDarkLow,
    },
  },

  button: {
    colorBtnPrimary: colors.primary.white,
    bgBtnPrimary: colors.default.vdscAuxiliaryBlue400,
    bgBtnPrimaryHover: colors.default.vdscAuxiliaryBlueMediumColor,
    bgBtnPrimaryFocus: colors.default.vdscAuxiliaryBlueHighColor,
    colorBtnOutline: colors.default.vdscAuxiliaryBlue400,
    colorBtnText: colors.default.vdscDarkMedium,
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
    borderBottomTable: colors.default.vdscDarkLow,
    outlineTableFocus: colors.default.vdscDarkHighColor,
    bgTableFocus: colors.default.vdscDarkHighColor,
    bgTableHover: colors.default.vdscDarkHoverColor,
    borderCB: colors.default.vdscLightHighColor,
    borderCBHover: colors.default.vdscAuxiliaryBlueMediumColor,
  },

  toggle: {
    colorActive: colors.default.vdscAuxiliaryBlue400,
    colorDisabled: colors.default.vdscDarkLow,
  },

  scrollbar: {
    colorTrack: colors.default.vdscDarkMediumColor,
    colorThumb: colors.default.vdscAuxiliaryBlueMediumColor,
    colorThumbHover: colors.default.vdscAuxiliaryBlueLowColor,
  },

  line: {
    color: colors.default.vdscAuxiliaryDisabledLowColor,
  },

  iconDefaultFak: {
    color: colors.default.vdscAuxiliaryGrayLowColor,
  },

  paginator: {
    background: colors.default.vdscDarkLow,
    color: colors.primary.white,
  },

  appMenu: {
    color: colors.default.vdscDarkMedium,
    background: colors.default.vdscAuxiliaryWhiteLowColor,
  },

  progress: {
    bgProgress: colors.default.vdscDarkLowColor,
    bgValue: colors.default.vdscAuxiliaryBlueHighColor,
  },

  card: {
    iconColor: colors.default.vdscDarkMedium,
    background: colors.default.vdscDarkMediumColor,
    borderColor: colors.default.vdscDarkHoverColorBorder,
    hover: colors.default.vdscDarkHoverColor
  },

  menuOptions: {
    color: colors.default.vdscDarkMedium,
    bgHover: colors.default.vdscDarkLow,
    colorHover: colors.default.vdscDarkLowColor,
  },

  badge: {
    info: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeInformation,
    },
    success: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeSuccess,
    },
    alert: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeWarning,
    },
    danger: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeCritical,
    },
    remember: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeMinor,
    },
    offline: {
      color: colors.badge.vdscBadgeIndeterminate,
      background: colors.badge.vdscBadgeIndeterminateAlternative3,
      border: colors.badge.vdscBadgeIndeterminate,
    },
    primary: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeNormal,
      border: colors.default.transparent,
    },
    not_available: {
      color: colors.badge.vdscBadgeIndeterminateAlternative1,
      background: colors.badge.vdscBadgeIndeterminate,
    },
  },

  ...dropdownColorsDark
};

export default dark;
