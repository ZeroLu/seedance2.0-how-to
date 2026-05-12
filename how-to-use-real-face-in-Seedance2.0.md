# The Ultimate Guide to Use Real Face in Seedance 2.0 (May 2026 Update)

**Disclaimer**
All these methods do not work on public figures and celebrities. And you should use it ethcially. I do not have anything to do with it if you misuse it. This is for informational purpose only.

---

If you’ve been experimenting with Seedance 2.0, you already know how frustrating the strict face detection algorithms can be. Trying to generate videos with specific faces often results in blocked prompts and error messages. 

I am Zero Lu, a content creator who use Seedance 2.0 a lot!
I’ve spent 48 hours testing every "hack" and workaround on the internet so you don't have to. The good news? I’ve narrowed down everything that *actually* works, and they all fall into three distinct categories. 

Whether you want to play by the rules or push the limits of prompt engineering, here is the ultimate guide to getting around Seedance 2.0's face detection.

---

### Method 1: The Official Route (Best for Users in China)
If you are located in China or have access to ByteDance’s domestic apps like **Jimeng** or the **XYQ app**, you can bypass the restrictions using official features. 

This is the safest and most reliable method. 

#### With your own face using Jimeng app:
1. Open the app and navigate to **我的** -> **创建分身**.
2. Open the camera and scan your face.
3. Once scanned, the system registers your face as a verified asset, you can simply @ your avatar to create a video.

Here is the screen recording of the process:
https://github.com/user-attachments/assets/736acb9a-0762-4863-8a03-bdd4e95d4648

And here is resulted video with my real face in it(With Jimeng watermarks):

https://github.com/user-attachments/assets/cc7a29ea-45f6-4052-9cc0-3fae0b76dcde

#### With your own face using XYQ:
1. Open the app and navigate to **The third tab** -> **发咕咕** -> **发咕咕**. Enter **@**, and choose **创建新角色**. Then choose **录制真人形象**.
2. Use the in-app camera to scan your own face. 
3. Once scanned, the system registers your face as a verified asset, you can simply @ your avatar to create a video.

Here is the screen recording of the process:

https://github.com/user-attachments/assets/fa390130-44ea-441a-bd35-6c60768450b9

#### With pre-built characters library using XYQ:
Don't want to scan your own face? You can also bypass the filters by simply utilizing XYQ's library of high-quality, pre-defined characters. 

1. Go to https://xyq.jianying.com/home?tab_name=home
<img width="500" alt="20260512085750" src="https://github.com/user-attachments/assets/26b75382-92f7-49e2-8ea0-204021d8d5a9" />

2. Click **+**, then choose **角色库**
<img width="500" alt="20260512085807" src="https://github.com/user-attachments/assets/1d60a350-ed73-4d0b-83fe-c6a92894ec0e" />

3. Navigate to **公共角色**, choose one and add to the scene. Then create any video with that character! 
<img width="500" alt="20260512085824" src="https://github.com/user-attachments/assets/d37f5d27-b479-4af2-a8c8-17cb1be02a0c" />

Special note: If you are using the same account, your avatar created with XYQ app will also appear in XYQ website under **分身角色**!


### Method 2: The Authorized Partner Route (Easiest & Best for Global Users)
Did you know ByteDance has given special permissions to a select few third-party partners to generate videos with real faces? If you don't want to deal with Chinese apps or scanning someone's face, this is your best option. 

**Cyberbara** is one of these authorized partners, and their tool is incredibly smooth. 

Here is my workflow:
1. Head over to [Cyberbara.com](https://cyberbara.com) and click on **Canvas**(Using canvas is optional but I find it to be an easy tool to use when creating a complex video project) on the header.
<img width="500" alt="20260512091157" src="https://github.com/user-attachments/assets/262bc0f9-efdf-41f5-ac84-fba0fc27a877" />

2. Sign in with Google, X or sign up with email.
<img width="500" alt="20260512091211" src="https://github.com/user-attachments/assets/fed746c0-c260-4efd-83ee-46009713bad4" />
<img width="500" alt="20260512091230" src="https://github.com/user-attachments/assets/b65a1b27-5e9d-4acc-b77f-100c7af9f066" />

3. Simply drag and drop your portrait onto the canvas. Then drag a line out and choose **Video Node**
<img width="500" alt="20260512091349" src="https://github.com/user-attachments/assets/dd726d2d-2517-446e-8f00-7afd33a27bea" />

4. Select **Seedance 2.0 Stable** or **Seedance 2.0 Fast Stable**. You can hover to the thumbnail of the image and click **@imageN** to reference the image. Then enter your prompt, and hit **Generate**.
<img width="500" alt="20260512091410" src="https://github.com/user-attachments/assets/bd450ebc-1461-4327-b63d-2547c6548bb3" />
<img width="500" alt="20260512091503" src="https://github.com/user-attachments/assets/309f4419-bb08-49ab-acaa-3051a7d7eb1b" />

5. In no time, your video is ready.
<img width="500" alt="20260512091526" src="https://github.com/user-attachments/assets/45a95935-39a3-4e8e-9216-39b40448eaad" />

Here is the resulted video👇
https://github.com/user-attachments/assets/7abc0503-d8bd-488f-aba5-d93dbd1fe673

And here is the sample image if you want to try it out yourself👇
<img width="300" alt="jake-nackos-IF9TK5Uy-KI-unsplash" src="https://github.com/user-attachments/assets/6d0266c9-e8a4-4aa9-85ad-7691934f2e77" />

That’s it! Because Cyberbara is a whitelisted partner, you get your video immediately with no face-detection blocks and absolutely no pre-processing required. 

### Method 3: The "Jailbreak" Route (Use at Your Own Risk)
If you are using other Seedance 2.0 video tools and don't have access to the first two methods, you can try to "jailbreak" the algorithm using prompt engineering. 

**A quick disclaimer:** *I do not highly recommend this method.* It goes against the system’s intended use, and ByteDance is constantly updating their algorithms. A prompt that works perfectly today might be patched by tomorrow. 

However, if you want to try it, the core concept is simple: **You need to hide the face from the security/recognition algorithm while keeping it visible to the AI generation engine.** 

There are numerous ways to trick the AI, but through my testing, these methods have the highest success rate:
#### 1. The Character Sheet Method:
Prompting the AI to view the image as a 2D character design reference sheet rather than a real human photograph.

GPT Image 2 Prompt:
```
@image1 Create a high-quality "cinematic character design board".
Name: [Fill]
Age: [Fill]
Height: [Fill]
Build: [Fill]
Style: [Cinematic realism / semi-realism / animation / Eastern, etc.]
Personality: [3-5 keywords]
Appearance: [Face, eyes, hair, skin, unique traits]
Clothing: [Top, bottom, outerwear, shoes, accessories, props]
Background: [Environment / profession / social status]

Generate a premium character pitch board for film/animation, not a basic orthographic sheet.
Layout must include:

Main full-body portrait
Full-body turnarounds (front, 3/4, side, back, 3/4 back)
Head studies (front, 3/4, side, up/down, dynamic)
Cinematic mood portrait
Clothing/accessory breakdowns
Brief professional annotations (name, height scale, materials, personality)
Layout Requirements:

Large landscape format
No rigid grids or mechanical symmetry
Art-directed, slightly asymmetrical composition
Neutral/light gray presentation board background
Premium, clear, professional cinematic pitch vibe
Rendering Requirements:

Character should look like a captured actor, not a posed model
Strict consistency in features, proportions, hair, and clothing across all angles
Realistic textures (skin, fabric, metal, leather)
Strong cinematic feel, storytelling, and high overall consistency
```

Screenshot:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/602f64c0-5863-406c-bdac-5fa5b7c789fd" />

Output:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/1cba1079-ce9a-4212-96d4-1f678bdcfd4a" />


#### 2. The Face Split Method:
Using prompts to visually divide or grid the face, which confuses the facial recognition detector but still allows the AI to render the features.


#### 3. The Colored Pencil Method:
Applying heavy artistic styles (like colored pencil sketches) to mask the photorealism that usually triggers the security block.

1. Use GPT Image 2 to process the input photo into split view colored pencil image.

GPT Image 2 prompt:
```
Character design sheet of the input photo, horizontal layout showing 3 views side-by-side: 45-degree left profile, front view, 45-degree right profile. Strict consistency in facial features, hairstyle, and clothing across all three angles. Colored pencil illustration style, traditional hand-drawn texture, colored sketch, clean background.
```

Screenshot:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/9aacb7e0-2575-4511-8525-387a801a47da" />

Result:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/a0653e09-f62c-44bf-87c4-d08b9fa5449d" />

2. Use the output image for Seedance 2.0, make sure to add the following text to your prompt to make sure that the video is realistic.

Seedance 2.0 prompt prefix:
```
Reference the uploaded character design to generate an ultra-realistic live-action video. Ensure cinematic lighting, detailed skin, and strict consistency in features, hair, and clothing. Include natural movements and stable, flicker-free footage.
```

#### 4. Grid overlay, Scenary overlay and X trick.
You can access all these tools for free in https://cyberbara.com/seedance-bypass-face-detection:
<img width="500" alt="image" src="https://github.com/user-attachments/assets/fe0522df-2784-47bc-a4d8-55335699eb5e" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/5865aa76-e872-4a42-ab92-5cfae7e79daf" />
<img width="500" alt="image" src="https://github.com/user-attachments/assets/16ecf4cc-6089-446f-bc67-6d855222bdd7" />


---


If want to learn more about Seedance 2.0, feel free to join my newsletter (https://zerolu.substack.com/) or follow me on X (https://x.com/zerolu_eth).
