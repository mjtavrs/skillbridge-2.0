'use client'

import { Button } from '../Button'
import { PageSection } from '../PageSection'
import * as Form from '../components/Form/FormComponents/index'
import * as ContactCard from './components/ContactCard/index'
import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react/dist/ssr'

export default function Contact() {
  return (
    <>
      <PageSection
        title="Contact Us"
        description={`Welcome to Skillbridge's Contact Page, where we are here to assist you with any inquiries or support you may need. Whether you have questions about our services, need help with your account, or want to provide feedback, our team is ready to help. We believe in open communication and are dedicated to providing you with the best possible support. Please feel free to reach out to us through any of the contact methods below. We look forward to hearing from you!`}
      />
      <div className="mx-40 mb-24">
        <div className="grid grid-cols-contactSection divide-x-2 divide-skillbridge-white-97 rounded-xl bg-white">
          <div className="p-20">
            <form className="space-y-12">
              <div className="space-y-8">
                <div className="grid grid-cols-twoColumnWrapper gap-8">
                  <Form.Fieldset>
                    <Form.InputLabel label="First Name" htmlFor="firstName" />
                    <Form.Input
                      id="firstName"
                      type="text"
                      placeholder="Enter First Name"
                    />
                  </Form.Fieldset>
                  <Form.Fieldset>
                    <Form.InputLabel label="Last Name" htmlFor="lastName" />
                    <Form.Input
                      id="lastName"
                      type="text"
                      placeholder="Enter Last Name"
                    />
                  </Form.Fieldset>
                  <Form.Fieldset>
                    <Form.InputLabel label="Email" htmlFor="email" />
                    <Form.Input
                      id="email"
                      type="email"
                      placeholder="Enter your Email"
                    />
                  </Form.Fieldset>
                  <Form.Fieldset>
                    <Form.InputLabel label="Phone" htmlFor="phone" />
                    <Form.Input
                      id="phone"
                      type="tel"
                      placeholder="Enter Phone Number"
                    />
                  </Form.Fieldset>
                </div>
                <Form.Fieldset>
                  <Form.InputLabel label="Subject" htmlFor="subject" />
                  <Form.Input
                    id="subject"
                    type="text"
                    placeholder="Enter your Subject"
                  />
                </Form.Fieldset>
              </div>
              <Form.Fieldset>
                <Form.InputLabel label="Message" htmlFor="message" />
                <textarea
                  className="rounded-xl border border-skillbridge-white-95 bg-skillbridge-white-99 p-6 text-skillbridge-grey-40 placeholder:text-skillbridge-grey-40"
                  name="message"
                  id="message"
                  placeholder="Enter your Message here..."
                  rows={6}
                />
              </Form.Fieldset>
              <div className="flex justify-center">
                <Button variant="orange">Send Your Message</Button>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-between p-20">
            <ContactCard.Container>
              <ContactCard.Info
                icon={<EnvelopeSimple />}
                infoDetail="support@skillbridge.com"
              />
            </ContactCard.Container>
            <ContactCard.Container>
              <ContactCard.Info
                icon={<Phone />}
                infoDetail="+91 91813 23 2309"
              />
            </ContactCard.Container>
            <ContactCard.Container>
              <ContactCard.Info
                icon={<MapPin />}
                infoDetail="Somewhere in the World"
              />
            </ContactCard.Container>
            <ContactCard.Container>
              <ContactCard.Social />
            </ContactCard.Container>
          </div>
        </div>
      </div>
    </>
  )
}
