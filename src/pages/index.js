import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            welcome to GMediCare + clinic
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            Best Specialists
          </p>
         <p className="mt-4 text-gray-600">we are on the leading edge of cancer care.
          Providing treatment of cancer and supportive care services in a single convennient location </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Services</h2>
         <p> we provides the most full medical services,so every person could have the opportunities to receives quality of medical help</p>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl" img src="C:\Users\SAURABH KUMAR\Desktop\gatsbyjs\src\components\layout\Images\dental care.jpg">Dental Care</p>
              <p className="mt-4">
                Dental checkup with dental specialists
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl" img src="C:\Users\SAURABH KUMAR\Desktop\gatsbyjs\src\components\layout\Images\pulmonary.jpg">pulmonary</p>
              <p className="mt-4">
               Lungs disease treatments with full  lungs care by our  specialists
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl" img src="C:\Users\SAURABH KUMAR\Desktop\gatsbyjs\src\components\layout\Images\neuro.jpg">Neurological</p>
              <p className="mt-4">
               All neurological treatments with excellence treatments by best neurologists
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Clinic with Innovatives</h3>
         
          <p className="mt-8 text-xl font-light leading-relaxed">
          we provides the most full medical services,so every have the chance to receive best treatment
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Our The Best Specialists of Dental Care
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
           <h2>Dr.Batra</h2>
           <p>Dental care</p>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Our Best Neurologists
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed" >
           <h2>Dr.Sukhmeet Singh</h2>
           <p>Neuro Care</p>
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What Our customers say</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Subscribe To Newsletter</h3>
      <p className="mt-8 text-xl font-light">
        we have wide experience in providing excellence treatments to our customers
      </p>
      <div class="container">

  <h1>FormSubmit Demo</h1>
<link rel="stylesheet" href="form.css"/>
  <form target="_blank" action="https://formsubmit.co/your@email.com" method="POST">

    <div class="form-group">

      <div class="form-row">

        <div class="col">

          <input type="text" name="name" class="form-control" placeholder="Full Name" required/>

        </div>

        <div class="col">

          <input type="email" name="email" class="form-control" placeholder="Email Address" required/>

        </div>

      </div>

    </div>

    <div class="form-group">

      <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>

    </div>

    <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>

  </form>

</div>
    </section>
  </Layout>
);

export default Index;
