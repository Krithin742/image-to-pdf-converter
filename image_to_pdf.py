import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image
import os

# Global lists to store selected images and PDF name
selected_images = []
pdf_name = ""

def image_to_pdf():
    if not selected_images or not pdf_name:
        messagebox.showwarning("Missing Data", "Please select images and provide a PDF name.")
        return
    try:
        # Open all selected images
        images = [Image.open(img).convert("RGB") for img in selected_images]
        images[0].save(pdf_name, "PDF", resolution=100.0, save_all=True, append_images=images[1:])
        messagebox.showinfo("Success", f"PDF saved as:\n{pdf_name}")
    except Exception as e:
        messagebox.showerror("Error", f"Failed to convert image to PDF:\n{str(e)}")

def select_images():
    global selected_images
    selected_images = filedialog.askopenfilenames(
        title="Select Images",
        filetypes=[("Image Files", "*.jpg;*.jpeg;*.png;*.gif"), ("All Files", "*.*")],
        initialdir="C:/"
    )

def select_pdf_name():
    global pdf_name
    pdf_name = filedialog.asksaveasfilename(
        title="Save PDF As",
        defaultextension=".pdf",
        filetypes=[("PDF Files", "*.pdf"), ("All Files", "*.*")],
        initialdir="C:/"
    )

# GUI Setup
root = tk.Tk()
root.title("Image to PDF Converter")

tk.Button(root, text="Select Images", command=select_images).pack(pady=5)
tk.Button(root, text="Select PDF Name", command=select_pdf_name).pack(pady=5)
tk.Button(root, text="Convert to PDF", command=image_to_pdf).pack(pady=10)

root.mainloop()
