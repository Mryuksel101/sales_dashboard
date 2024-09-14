// Cookie oluşturma fonksiyonu
const setCookie = (name: string, value: string, hours: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // 1 saat
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Cookie'den belirli bir anahtarla değer çekme fonksiyonu
export const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
    return null;
};