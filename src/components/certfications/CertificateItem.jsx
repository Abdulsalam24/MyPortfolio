
const CertificateItem = ({
  certificate,
  certificateLength,
}) => {


  return (
    <div className="py-3">
      <div>{certificate.certifcation}</div>
    </div>
  );
};

export default CertificateItem;
