import React from 'react';
import { ResumeSection } from '../../common';

/**
 * Visits Section
 *
 * @author Todd Walters <waltodders@gmail.com>
 */

var visitors
// const url = "https://api.dev.resume.waltodders.com/dev/counter";
// 
// var request = require("request");
// var userDetails;
// var num;
// var visitor;
// function initialize() {
//     // Setting URL and headers for request
//     var options = {
//         url: 'https://api.dev.resume.waltodders.com/dev/counter',
//         headers: {
//             'User-Agent': 'request'
//         }
//     };
//     // Return new promise 
//     return new Promise(function(resolve, reject) {
//     	// Do async job
//         request.get(options, function(err, resp, body) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(JSON.parse(body));
//             }
//         })
//     })
// 
// }
// 
// function main() {
//     var initializePromise = initialize();
//     initializePromise.then(function(result) {
//         userDetails = result;
//         num = userDetails.Attributes.VisitCount;
//         // console.log("Initialized user details");
//         // Use user details from here
//         console.log('Your visitor number is %s',userDetails.Attributes.VisitCount)
//         return num
//     }, function(err) {
//         console.log(err);
//     })
// }

const VisitsSection = () => (
    <ResumeSection name="Visits">
            <div className="w-100">
                Total Visitors: <b>{visitors}</b>
            </div>
    </ResumeSection>
);

export default VisitsSection;

/**
 * import { jsx, css } from '@emotion/core'
 * import useSWR from 'swr'
 * 
 * export default function Visits() {
 *   const fetcher = url => fetch(url, { method: 'PUT' }).then(r => r.json())
 *   const { data, error } = useSWR('/api/visits', fetcher, {
 *     revalidateOnFocus: false,
 *     revalidateOnReconnect: false,
 *   })
 * 
 *   if (error || !data) return null
 *   return (
 *     <div css={css`text-align: center;`}>
 *       You are the <b>{data.visits}</b> visitor on this site!!
 *     </div>
 *   )
 * }
 */
