### "Patchy" rendering issue with three-loader-3dtiles

Steps:

- Download LAS file from https://storage.googleapis.com/xoxo-test-bucket-1/las/merged_scan_2_2_84160092.las
- Move LAS file to /convert/raw
- In /convert run convert.sh to create 3D tiles from the LAS file.
- Manually move files from /convert/ouput to /server/public
- Start web server by running `npm run dev` in /server
- Start the React based client by running `npm run dev` in /client
