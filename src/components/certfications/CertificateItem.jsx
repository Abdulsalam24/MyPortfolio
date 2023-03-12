const CertificateItem = ({ certificate, certificateLength }) => {
  return (
    <div className="py-3">
      <div>
        <a href="https://ilorininnovationhub.com/programs/e-government-hackathon/" target="_blank" rel="noreferrer">
          {certificate.certifcation}
        </a>
      </div>
    </div>
  );
};

export default CertificateItem;
