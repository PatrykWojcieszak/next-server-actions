"use client";

import {
  fileFormDataAction,
  jsonObjectDataAction,
} from "@/serverActions/serverActions";
import { useState } from "react";

export const Form = () => {
  const [formDataFile, setFormDataFile] = useState<File | undefined>(undefined);
  const [jsonObjectFile, setJsonObjectFile] = useState<File | undefined>(
    undefined
  );

  const handleFormDataSubmit = () => {
    if (formDataFile) {
      console.log("formData", formDataFile);
      const formData = new FormData();
      formData.append("file", formDataFile);
      fileFormDataAction(formData);
    }
  };

  const handleJsonObjectDataSubmit = async () => {
    if (jsonObjectFile) {
      console.log("jsonObjectFile", jsonObjectFile);
      const photoBuffer = Buffer.from(await jsonObjectFile?.arrayBuffer());
      await jsonObjectDataAction(
        JSON.stringify({ file: photoBuffer.toString("base64") })
      );
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col gap-3">
        <span>Form data</span>
        <input
          type="file"
          onChange={(e) => setFormDataFile(e.target.files?.[0])}
        />
        <button onClick={handleFormDataSubmit}>Submit</button>
      </div>
      <div className="flex flex-col gap-3">
        <span>JSON object</span>
        <input
          type="file"
          onChange={(e) => {
            setJsonObjectFile(e.target.files?.[0]);
          }}
        />
        <button onClick={handleJsonObjectDataSubmit}>Submit</button>
      </div>
    </div>
  );
};
