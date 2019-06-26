const ServiceDeck = props => {
  const buildService = () => {
    const serviceElements = props.data.slice(0,3).map(item => {
      return (
          <div key={item.name} className="col-12 col-md-4 p-5 align-self-baseline text-center pointer">
            <p>
              <img className="img-fluid" src={item.img} />
            </p>
            <h3 className="mt-5">{item.name}</h3>
            <p className="mt-4">{item.description}</p>
          </div>
      );
    });
    return serviceElements;
  };

  return <div className="row">{buildService()}</div>;
};

export default ServiceDeck;
