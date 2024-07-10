export const ANTD_THEME = {
  token: {
    // Seed Token，影响范围大
    colorPrimary: "#DC91E5",
    borderRadius: 0,

    // 派生变量，影响范围小
    colorBgContainer: "transparent", // '#261435',
    bodySortBg: "red",
    colorBgElevated: "#0D0316",
    colorText: "white",
    colorTextDescription: "#ccc",
    colorBgMask: "rgba(0,0,0,.1)",
    borderRadiusLG: 8,
  },
  components: {
    Popover: {
      colorPrimary: "#0D0316",
    },
    Table: {
      borderColor: "rgba(255, 255, 255, 0.2)",
      headerColor: "#80838e",
      headerSplitColor: "transparent",
      rowHoverBg: "rgba(0, 0, 0, 0.7)", // '#0D0612'
    },
    Empty: {},
    Skeleton: {
      gradientFromColor: "rgba(255, 255, 255, 0.12)",
      gradientToColor: "rgba(255, 255, 255, 0.18)",
    },
    Modal: {
      contentBg: "#0f0c29",
      footerBg: "#0f0c29",
      // headerBg: "rgba(34,10,53,.8)",
      titleColor: "white",
    },
  },
};
