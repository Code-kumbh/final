import streamlit as st
from huggingface_hub import InferenceClient
import os
from dotenv import load_dotenv
from PIL import Image
import io

# Load environment variables
load_dotenv()
hf_token = os.getenv("HUGGINGFACEHUB_ACCESS_TOKEN")

# Ensure the token is available
if not hf_token:
    st.error("Hugging Face API Token is missing! Please set it in the .env file.")
    st.stop()

# Initialize Hugging Face client with API token
client = InferenceClient(token=hf_token)

def generate_mp_image(prompt, model="stabilityai/stable-diffusion-xl-base-1.0"):
    try:
        # Generate the image using text-to-image model
        image = client.text_to_image(
            model=model,
            prompt=f"{prompt}, Madhya Pradesh, India, realistic travel photo, budget tourism",
            negative_prompt="cartoonish, blurry, text, Taj Mahal, non-Indian architecture"
        )
        
        # Ensure the returned object is a PIL Image
        if isinstance(image, bytes):  
            image = Image.open(io.BytesIO(image))

        return image
    except Exception as e:
        st.error(f"Image generation failed: {str(e)}")
        return None

# Streamlit UI
st.set_page_config(page_title="Assan Safar", page_icon="🕌")
st.title("Assan Safar Image Generator")

user_input = st.text_input(
    "Describe your Travel scene:",
    "Sanchi Stupa"
)

if st.button("Generate Image"):
    with st.spinner("Creating your Assan Safar visual..."):
        image = generate_mp_image(prompt=user_input)

        if image:
            st.image(image, caption=f"Generated: {user_input}")

            # Convert image to bytes for downloading
            img_buffer = io.BytesIO()
            image.save(img_buffer, format="PNG")
            img_bytes = img_buffer.getvalue()

            st.download_button(
                "Download Image",
                img_bytes,
                file_name="mp_travel.png",
                mime="image/png"
            )
