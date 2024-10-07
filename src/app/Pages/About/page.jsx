"use client";
import react, {useEffect} from "react";
import useRequestData from "../../../Hooks/useRequestData";
import Image from "next/image";

const About = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5099/about");
  }, []);
  //[] = når der ikke er noget i loader den kun 1 gang, men hvis du lytter efter noget køre den flere gange

  return (
    <div>
      <h1  >om os</h1>
      <div>
        {data && (
          <div>
            <h2 className="text-4xl font-medium p-4">{data.title}</h2>
            <p
              className="md:px-20 px-4 py-5 text-gray-400"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></p>
            <Image>

            </Image>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
