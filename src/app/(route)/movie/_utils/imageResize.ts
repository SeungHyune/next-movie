export const imageResize = (
  currentImage: string,
  currentSize: string | number,
  changeSize: string | number,
) => {
  const changeImage = currentImage.replace(
    String(currentSize),
    String(changeSize),
  )

  return changeImage
}
