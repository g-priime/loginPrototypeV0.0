import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";
import "../css/faq.css";
//import 'react-accessible-accordion/dist/fancy-example.css';

class FAQ extends React.Component {
  render() {
    return (
      <div
        className="gallery-container ui segment cont "
        style={{ backgroundColor: "#ECEBE7" }}
      >
        <h1 className="txt">FAQ</h1>
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to register account?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                If you don't have an account yet you need to register one to use
                the website services and for booking the appointments. To
                register the account click{" "}
                <i>
                  <b>Login/Register</b>
                </i>{" "}
                button on the top navigation menu bar. The pop-up window will
                appears. Click{" "}
                <i>
                  <b>Register New Account</b>
                </i>{" "}
                button. Fill out all the fields. Create the unique user name -
                you will be using it to log in into the system. The user name
                should be at least 5 characters long. Create the password for
                your account - the lenght of it must be at least 8 characters.
                Enter your first name, last name and email. Go to the next step.
                Fill out all the fields and click{" "}
                <i>
                  <b>Register</b>
                </i>{" "}
                button. Your account is created. Now proceed to the{" "}
                <i>
                  <b>Login/Register</b>
                </i>{" "}
                menu tab to login to the system.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to login to the account?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To login to your account click{" "}
                <i>
                  <b>Login/Register</b>
                </i>{" "}
                button on the top menu bar. Enter your credentials - user name
                and password. Click{" "}
                <i>
                  <b>Login</b>
                </i>{" "}
                button. Proceed to the{" "}
                <i>
                  <b>Account</b>
                </i>{" "}
                button on the top menu bar and click{" "}
                <i>
                  <b>Profile</b>
                </i>{" "}
                to enter your account or{" "}
                <i>
                  <b>View Appointments</b>
                </i>{" "}
                button to review your appointments information. To log out of
                the system click{" "}
                <i>
                  <b>Log Out</b>
                </i>{" "}
                button.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to change the password?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To change you password you have to be logged in into the system.
                Under your Profile click{" "}
                <i>
                  <b>Change Password</b>
                </i>{" "}
                button. In the opened window enter your old password, new
                password, confirmation of the new password. If new and confirmed
                passwords match the password will be changed successfully.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to book an appointment?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                You can book the new appointment from the{" "}
                <i>
                  <b>Services</b>
                </i>{" "}
                tab of the top menu or in your account under the{" "}
                <i>
                  <b>View Appointments</b>
                </i>{" "}
                tab.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to add a dog to the account?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To book appointments you have to have dog/dogs under your
                account added. To add a new dog to your account log in into the
                system. Go to your Profile and click{" "}
                <i>
                  <b>Add new dog</b>
                </i>{" "}
                button. In the openned window enter the information about your
                dog. All the fieald are required. Add the picture of your dog -
                required. Go to the step 2 clicking related button. Fill out the
                Pet behaviour Profile and enter the dates for the vaccines. If
                the listed vaccines have expired you are not allowed to bring
                your dog in order to keep other dogs in safety!
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to check the existing appointments?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To check the status of your appointment, to make a payment or
                cancel the appointment go to the{" "}
                <i>
                  <b>View Appointments</b>
                </i>{" "}
                tab of your account.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to change the personal information?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To change your personal information go to your{" "}
                <i>
                  <b>Profile</b>
                </i>{" "}
                under Account tab of the top menu bar and click{" "}
                <i>
                  <b>Edit customer information</b>
                </i>{" "}
                button. Make your changes in the openned window. The user name
                can not be changed! Save the changes.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to change the information about the dog?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                To edit the information about your dog go to your profile under{" "}
                <i>
                  <b>Account</b>
                </i>{" "}
                tab of the top menu bar. Find the name of the dog you wish to be
                changed and click{" "}
                <i>
                  <b>Edit</b>
                </i>{" "}
                button next to the name. Make the changes in the new window. All
                the fields are required. Save your changes. To delete the dog
                find the dog name to be deleted and click{" "}
                <i>
                  <b>Delete</b>
                </i>{" "}
                button next to the name of the dog.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What vaccines are mandatory?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In order of keeping your and other dogs in safety we insist that
                the followed vaccines should be taken.
                <ul>
                  <li>DA2PP</li>
                  <li>Rabies</li>
                  <li>Bordetella</li>
                </ul>
                The expiration date of the listed vaccines should not be erlier
                than the date of the last day of boarding.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What to do if the dog's vaccine has expired?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                If the date of the mandatory vaccines has expired it is your
                responsibility to take them in advance before your visit. Don't
                forget to update the date of the expiration dates under your
                Profile.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to pay for the appointment?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                The followed ways of payment are acceptable:
                <ul>
                  <li>PayPal</li>
                  <li>Cash</li>
                  <li>Check</li>
                  <li>Email transfer</li>
                </ul>
                To pay by PayPal go to{" "}
                <i>
                  <b>View Appointments</b>
                </i>{" "}
                tab under Account, book the new appointment and follow
                instructions.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to cancel the appointmen?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                You can cancel your booked appointment not later than 3 days
                before the date of it. To cancel appointment go to{" "}
                <i>
                  <b>View Appointments</b>
                </i>{" "}
                tab under your account, find the appointment to be cancelled and
                click{" "}
                <i>
                  <b>Cancel</b>
                </i>{" "}
                button next to it. No refunds are available.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What behaviour skills can be trained?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                <ul>
                  <li>Crate training</li>
                  <li>House training</li>
                  <li>Appropriate chewing</li>
                  <li>Sit</li>
                  <li>Sit and Wait at doorways</li>
                  <li>Sit and wait for meals</li>
                  <li>Down</li>
                  <li>Impulse control around food</li>
                  <li>Place command</li>
                  <li>Response to name, handler focus</li>
                  <li>Non-reactivity in the yard and on leash</li>
                  <li>Stay</li>
                  <li>Loose leash walking</li>
                  <li>Come when called</li>
                  <li>Off leash reliability</li>
                  <li>Non-reactivity out and about</li>
                  <li>Travel socialization</li>
                  <li>Counter surfing</li>
                  <li>Jumping fences</li>
                  <li>Resource guarding</li>
                </ul>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default FAQ;
