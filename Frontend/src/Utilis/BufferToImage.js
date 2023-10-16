// Covert Image buffer to Image //
const BufferToImage = async (buffer) => {
  if (buffer?.data) {
    const uint8Array = new Uint8Array(buffer?.data);
    const blob = new Blob([uint8Array], {
      type: buffer?.type,
    });
    const imageUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });
    return imageUrl;
  }
  return null;
};

export default BufferToImage;
