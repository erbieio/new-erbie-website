export const ANTD_THEME = {
    token: {
        // Seed Token，影响范围大
        colorPrimary: 'rgba(223, 222, 222, 0.08)',
        borderRadius: 0,

        // 派生变量，影响范围小
        colorBgContainer: 'transparent', // '#261435',
        bodySortBg:'red',
        colorBgElevated:'#0D0316',
        colorText:'white',
        colorTextDescription: '#ccc'
      },
      components: {
        Popover: {
          colorPrimary: '#0D0316',
        },
        Table: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          headerColor: '#80838e',
          headerSplitColor: 'transparent',
          rowHoverBg:'rgba(255, 255, 255, 0.05)', // '#0D0612'
        },
        Empty: {
      
        },
        Skeleton : {
          gradientFromColor: 'rgba(255, 255, 255, 0.12)',
          gradientToColor: 'rgba(255, 255, 255, 0.18)',
        }
      }
}
