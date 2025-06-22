interface ThemeColors {
    text: string;
    bgColor: (opacity: number) => string;
}

export const themeColors: ThemeColors = {
    text: '#f97316',
    bgColor: (opacity: number): string => `rgba(251, 146, 60, ${opacity})`,
}