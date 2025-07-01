
interface ThemeColors {
    text: string;
    bgColor: (opacity: number) => string;
}

const pallete: ThemeColors[] = [
    {
        text: '#f97316',
        bgColor: opacity => `rgba(251, 146, 60, ${opacity})`
    },
    {
        text: '#3b82f6',
        bgColor: opacity => `rgba(59, 130, 246, ${opacity})`
    },
    {
        text: '#10b981',
        bgColor: opacity => `rgba(16, 185, 129, ${opacity})`
    },
    {
        text: '#ef4444',
        bgColor: opacity => `rgba(239, 68, 68, ${opacity})`
    },
    {
        text: '#8b5cf6',
        bgColor: opacity => `rgba(139, 92, 246, ${opacity})`
    },
    {
        text: '#ec4899',
        bgColor: opacity => `rgba(236, 72, 153, ${opacity})`
    },
    {
        text: '#f59e0b',
        bgColor: opacity => `rgba(245, 158, 11, ${opacity})`
    },
    {
        text: '#14b8a6',
        bgColor: opacity => `rgba(20, 184, 166, ${opacity})`
    },
    {
        text: '#64748b',
        bgColor: opacity => `rgba(100, 116, 139, ${opacity})`
    },
    {
        text: '#84cc16',
        bgColor: opacity => `rgba(132, 204, 22, ${opacity})`
    }
];

export const themeColors: ThemeColors = {
    ...pallete[0]
}