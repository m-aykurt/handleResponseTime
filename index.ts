const handleResponseTime = (time: string) => {
  const now = new Date();
  const arrival = new Date(time);
  const diffTime = now.getTime() - arrival.getTime();
  const m = Math.floor((diffTime / 1000 / 60) % 60);
  const h = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const d = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (h < 1) {
    return m + " dakika önce yanıtlandı";
  } else if (d < 1) {
    return (
      `${h !== 0 ? m + " saat " : ""}` +
      `${m !== 0 ? m + " dakika " : ""}` +
      " önce yanıtlandı."
    );
  } else {
    return (
      `${d !== 0 ? d + " gün " : ""}` +
      `${h !== 0 ? h + " saat " : ""}` +
      `${m !== 0 ? m + " dakika " : ""}` +
      " önce yanıtlandı."
    );
  }
};
