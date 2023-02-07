import colors from "../colors";

const light = {
  title: "light",

  default: {
    background: colors.default.vdscBackground1Color,
    bgAlternative1: colors.primary.white,
    bgAlternative2: colors.primary.white,
    color: colors.default.vdscDarkMedium,
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
    },
  },

  button: {
    colorBtnPrimary: colors.primary.white,
    bgBtnPrimary: colors.default.vdscAuxiliaryBlue400,
    bgBtnPrimaryHover: colors.default.vdscAuxiliaryBlueMediumColor,
    bgBtnPrimaryFocus: colors.default.vdscAuxiliaryBlueHighColor,
    colorBtnOutline: colors.default.vdscAuxiliaryBlue400,
    colorBtnText: colors.default.vdscAuxiliaryBlue400,
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
    color: colors.default.vdscAuxiliaryDisabledLowColor,
  },

  iconDefaultFak: {
    color: colors.default.vdscDarkHighColor,
  },

  paginator: {
    background: colors.default.vdscAuxiliaryBlue100,
    color: colors.default.vdscAuxiliaryBlue400,
  },

  appMenu: {
    color: colors.default.vdscDarkMedium,
    background: colors.default.vdscAuxiliaryWhiteLowColor,
  },

  progress: {
    bgProgress: colors.default.vdscAuxiliaryBlueLowColor,
    bgValue: colors.default.vdscAuxiliaryBlueHighColor,
  },

  card: {
    iconColor: colors.default.vdscDarkMedium,
    background: colors.default.vdscAuxiliaryWhiteLowColor,
    borderColor: colors.default.transparent,
    hover: colors.default.vdscBackground1Color
  },

  menuOptions: {
    color: colors.default.vdscDarkMedium,
    bgHover: colors.default.vdscLightLowColor,
    colorHover: colors.default.vdscDarkLowColor,
  },

  badge: {
    info: {
      color: colors.badge.vdscBadgeInformation,
      background: colors.badge.vdscBadgeInformationAlternative1,
    },
    success: {
      color: colors.badge.vdscBadgeSuccess,
      background: colors.badge.vdscBadgeSuccessAlternative1,
    },
    alert: {
      color: colors.badge.vdscBadgeWarning,
      background: colors.badge.vdscBadgeWarningAlternative1,
    },
    danger: {
      color: colors.badge.vdscBadgeCritical,
      background: colors.badge.vdscBadgeCriticalAlternative1,
    },
    remember: {
      color: colors.badge.vdscBadgeMinor,
      background: colors.badge.vdscBadgeMinorAlternative1,
    },
    offline: {
      color: colors.badge.vdscBadgeIndeterminate,
      background: colors.badge.vdscBadgeIndeterminateAlternative1,
      border: colors.badge.vdscBadgeIndeterminateAlternative2,
    },
    primary: {
      color: colors.badge.vdscBadgeNormal,
      background: colors.badge.vdscBadgeNormalAlternative1,
      border: colors.badge.vdscBadgeIndeterminateAlternative2,
    },
    not_available: {
      color: colors.badge.vdscBadgeIndeterminate,
      background: colors.badge.vdscBadgeIndeterminateAlternative2,
    },
  },
};

export default light;
