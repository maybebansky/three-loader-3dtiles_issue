### "Patchy" rendering issue with 3d-tiles-renderer

Here is an image of the "patchy" effect I get from rendering a point cloud:

![Issue screenshot](issue-img/issue1.png)

I don't get this issue viewing the original LAS file in Cloud Compare:

![Cloud compare](issue-img/cloud-compare.png)

Steps:

- In /convert run convert.sh to create 3D tiles from the LAS file.
- Manually move files from /convert/ouput to /server/public
- Start web server by running `npm run dev` in /server
- Start the React based client by running `npm run dev` in /client
