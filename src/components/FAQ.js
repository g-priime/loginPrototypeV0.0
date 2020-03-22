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
                button on the top menu bar. 
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What vaccines are mandotory?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
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
