import React from 'react';

const About = () => {
  return (
    <div name="about" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white flex justify-center items-center'>
        <div className='max-w-screen-lg px-4 w-full'>
            <h1 className='text-4xl font-bold border-b-4 border-gray-500 mb-8'>About</h1>

            <div className='mb-20'></div>

            <section className='text-xl mb-10'>
                <h2 className='text-2xl mb-4'>EXPERIENCE</h2>
                <h3 className='text-xl mb-2'>2019 to CURRENT</h3>
                <p>BAR AND GAMING SUPERVISOR, HARBORD BOWLING CLUB</p>
                <ul className='list-disc list-inside'>
                    <li>Ensured smooth operation of the bar while maintaining high customer satisfaction.</li>
                    <li>Provided prompt and effective responses to customer requests and queries.</li>
                    <li>Demonstrated adaptability in overcoming obstacles in high-pressure situations.</li>
                    <li>Maintained cash floats and tills in accordance with company policy.</li>
                </ul>

                <h3 className='text-xl mt-6 mb-2'>JUNE 2022 to CURRENT</h3>
                <p>JUNIOR DEVELOPER, STREAMLINE ID</p>
                <ul className='list-disc list-inside'>
                    <li>Conducted testing and reporting of code for onboarding systems in the financial sector.</li>
                    <li>Contributed to software improvement through problem-solving and feature enhancement.</li>
                    <li>Assisted the team in supporting a sophisticated cloud-based job management system.</li>
                    <li>Collaborated with experienced developers in a professional office environment.</li>
                </ul>
            </section>

            <section className='text-xl'>
                <h2 className='text-2xl mb-4'>EDUCATION</h2>
                <h3 className='text-xl mb-2'>2018</h3>
                <p>HSC, ST AUGUSTINES COLLEGE BROOKVALE</p>

                <h3 className='text-xl mt-6 mb-2'>2020 to NOVEMBER 2023</h3>
                <p>BACHELOR OF BUSINESS (FINANCE), UNIVERSITY OF TECHNOLOGY SYDNEY</p>
                <ul className='list-disc list-inside'>
                    <li>Focused on financial markets, investment strategies, corporate finance, and financial analysis.</li>
                    <li>Developed a strong understanding of financial theories, principles, and practices.</li>
                    <li>Gained experience in financial modeling, risk management, and decision-making.</li>
                </ul>

                <h3 className='text-xl mt-6 mb-2'>2020 to NOVEMBER 2023</h3>
                <p>BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY (ENTERPRISE SYSTEMS), UNIVERSITY OF TECHNOLOGY SYDNEY</p>
                <ul className='list-disc list-inside mb-10'>
                    <li>Concentrated on the design, implementation, and management of large-scale information systems.</li>
                    <li>Acquired skills in systems analysis, software development, database management, and IT project management.</li>
                    <li>Gained proficiency in multiple programming languages and software tools.</li>
                </ul>
            </section>

        </div>
    </div>
  );
}

export default About;
