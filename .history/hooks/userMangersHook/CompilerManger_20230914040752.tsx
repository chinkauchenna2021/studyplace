import React from 'react'
import axios from 'axios';

async function CompilerManger() {

const options = {
  method: 'POST',
  url: 'https://judge0-ce.p.rapidapi.com/submissions',
  params: {
    base64_encoded: 'true',
    fields: '*'
  },
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': '9a0bd1bd56mshdc213e0cb07e320p15820ejsn6d8ea8ffab26',
    'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
  },
  data: {
    language_id: 52,
    source_code: 'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
    stdin: 'SnVkZ2Uw'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

}

export default CompilerManger
