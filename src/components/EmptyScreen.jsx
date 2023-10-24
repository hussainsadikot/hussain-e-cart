
  const EmptyScreen = (props) => {
    const { url, title, description, className } = props;
    return (
      <div className={className}>
        <img src={`${url ? url : "/no-product.png"}`} alt="no data" style={{height: '200px'}} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  };
  
  export default EmptyScreen;
  