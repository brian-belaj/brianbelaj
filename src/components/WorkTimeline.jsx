import React from "react";

const Timeline = () => {
  const events = [
    {
      title: "Fullstack web developer courser",
      description:
        "Learned basic web development issues, html, css, js php. I obtained a certification also.",
    },
    {
      title: "Frontend Web Developer Internship",
      description:
        'I started using WordPress and get familiar with UX/UI principles. The internship was made at <a href="https://www.apparound.com/" class="text-red-700 font-bold underline" target="_blank">Apparound</a>.',
    },
    {
      title: "Developer and specialist in website optimization",
      description:
        "I started my first developer job.The experience was highly immersive, exposing me to advanced tasks despite my basic skill set. I was responsible for optimizing customer's websites in terms of Core Web Vitals, ensuring a fast and high-quality browsing experience for users.",
    },
    {
      title: "Frontend Developer",
      description:
        "Active collaboration within the development team for the creation and maintenance of customers websites.",
    },
  ];
  const downloadPDF = () => {
    // Create a string containing the PDF content
    const pdfContent = events
      .map(
        (event, index) =>
          `${index + 1}. ${event.title}\n${event.description}\n\n`
      )
      .join("");

    // Create a data URI for the PDF
    const dataUri = `data:application/pdf;base64,${btoa(pdfContent)}`;

    // Create an anchor element and trigger the download
    const link = document.createElement("a");
    link.href = dataUri;
    link.download = "src/assets/pdf/CV+-+Brian+Belaj_EN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8" id="experience">
        <h2 className="text-5xl text-center text-white font-bold mb-16">My experience</h2>
      <div className="relative wrap overflow-hidden mb-10">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-5/6 border left-1/2"></div>
        {events.map((event, index) => (
          <div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0
                ? "right-timeline"
                : "flex-row-reverse left-timeline"
            }`}
          >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {index + 1}
              </h1>
            </div>
            <div className="order-1 bg-lime-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                {event.title}
              </h3>
              <p
                className="text-gray-700 leading-tight"
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
          <button
            onClick={downloadPDF}
            className="bg-orange-500 text-white px-12 pt-4 pb-3.5 rounded"
          >
            Download my CV
          </button>
        </div>
    </div>
  );
};

export default Timeline;
