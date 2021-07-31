import { GOOGLE_MAPS_LINK } from '@/constants';
import React, { Fragment } from 'react';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">
                Lokasi Acara
              </h2>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#828282" }}
                >
                  <strong>Buka Google Maps</strong>
                </a>
                <br />
                Sebelah PT. Binawan Inti Utama Dusun Ireng Lauk, Gunungsari, Lombok Barat
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.4547441113027!2d116.08469491478324!3d-8.552194793852506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc055b0fe8b25%3A0x2f64eca04019fe8!2sPT.%20Binawan%20Inti%20Utama!5e0!3m2!1sen!2sid!4v1627746029296!5m2!1sen!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Zaki & Ika Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
