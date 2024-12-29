import React, { useState } from "react";
import styled from "styled-components";
import { FaAsterisk } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

const FaqProps = ({ head, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => setIsOpen(!isOpen);

    return (
        <FaqPropsDiv>
            <section id="faqwrap">
                <div className="faqhead" onClick={toggleContent}>
                    <h4>
                        <FaAsterisk /> {head}
                    </h4>
                    {isOpen ? (
                        <p>
                            <MdOutlineKeyboardArrowUp />
                        </p>
                    ) : (
                        <p>
                            <MdOutlineKeyboardArrowDown />
                        </p>
                    )}
                </div>
                {isOpen && (
                    <div className="faqcontent">
                        <p>{content}</p>
                    </div>
                )}
            </section>
        </FaqPropsDiv>
    );
};

export default FaqProps;

const FaqPropsDiv = styled.div`
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    max-width: 700px;
    padding: 5px 20px;
    margin: 5px 0px;

    .faqcontent {
        max-width: 500px;
    }
    .faqhead {
        display: flex;
        justify-content: space-between;
        color: #0000ff;
        cursor: pointer;
    }
`;