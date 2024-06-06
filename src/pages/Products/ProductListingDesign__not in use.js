import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
  MDBRipple,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../../assets/data/styles/style.css";

function ProductCard({ product }) {
  return (
    <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom hover-overlay"
            >
              <MDBCardImage
                src={product.image}
                fluid
                className="w-100"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
          </MDBCol>
          <MDBCol md="6">
            <h5>{product.name}</h5>
            <div className="d-flex flex-row">
              <div className="text-danger mb-1 me-2">
                {[...Array(product.rating)].map((_, index) => (
                  <MDBIcon key={index} fas icon="star" />
                ))}
              </div>
              <span>{product.reviews}</span>
            </div>
            <div className="mt-1 mb-0 text-muted small">
              <span>{product.material}</span>
              <span className="text-primary"> • </span>
              <span>{product.weight}</span>
              <span className="text-primary"> • </span>
              <span>
                {product.finish}
                <br />
              </span>
            </div>
            <div className="mb-2 text-muted small">
              <span>{product.design}</span>
              <span className="text-primary"> • </span>
              <span>{product.gender}</span>
              <span className="text-primary"> • </span>
              <span>
                {product.type}
                <br />
              </span>
            </div>
            <p className="text-truncate mb-4 mb-md-0">
              {product.description}
            </p>
          </MDBCol>
          <MDBCol
            md="6"
            lg="3"
            className="border-sm-start-none border-start"
          >
            <div className="d-flex flex-row align-items-center mb-1">
              <h4 className="mb-1 me-1">{product.price}</h4>
              <span className="text-danger">
                <s>{product.previousPrice}</s>
              </span>
            </div>
            <h6 className="text-success">{product.shipping}</h6>
            <div className="d-flex flex-column mt-4">
              <MDBBtn color="primary" size="sm">
                Details
              </MDBBtn>
              <MDBBtn outline color="primary" size="sm" className="mt-2">
                Add to wish list
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
  );
}
function ProductListingDesign({ products }) {
  return (
    <div>
      {products ? (
        products.map((product) => (
          <div key={product.id}>
            {/* Render product details */}
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductListingDesign;
