const Text = ({ text, isHTML = false }) => {
  return (
    <>
      {isHTML ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div>{text}</div>
      )}
    </>
  );
};

export default Text;
