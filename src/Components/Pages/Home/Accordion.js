import React from 'react';

const Accordion = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Why do partnership with us
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        We are one of the leading brands in Bangladesh who fulfill the 70% need of local market and export 10$million worthy products every year. Our net worth is 14$Billion and counting.Our mission is to increase the export rate by 45% yearly.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Why you should buy our stock
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        In this year we have made 55% profit and distributed 30% to the honourable share holders. Per year our per share value is increasing by 10%. We arrange a voting system every year for choosing our board member. Besides, we provide our share holders highest of priority.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Why you should buy products from us
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        All of of our furniture products are made with fine wood selected and certified by BSTI. We collect woods from local market and sometimes emport from overseas. 80% of our furnitures are made with Teak. So you can relax in our furnitures without any worry.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordion;