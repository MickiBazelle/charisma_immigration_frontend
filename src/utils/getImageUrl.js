function getImageUrl(fileName) {
  const ext = ".png";
  const imgUrl = new URL(
    `../assets/imgs/website/${fileName}${ext}`,
    import.meta.url
  ).href;
  return imgUrl;
}

export default getImageUrl;
