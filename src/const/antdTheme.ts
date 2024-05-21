export const ANTD_THEME = {
    token: {
        // Seed Token，影响范围大
        colorPrimary: 'rgba(223, 222, 222, 0.08)',
        borderRadius: 0,

        // 派生变量，影响范围小
        colorBgContainer: '#261435',
        bodySortBg:'red',
        colorBgElevated:'#0D0316',
        colorText:'white',
      },
      components: {
        Popover: {
          colorPrimary: '#0D0316',
        },
        Table: {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          headerColor: '#80838e',
          headerSplitColor: 'transparent',
          // headerSortActiveBg: '#1677ff'
        }
      }
}