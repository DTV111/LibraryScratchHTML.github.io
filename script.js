document.getElementById("downloadBtn").addEventListener("click", function() {
  const link = document.createElement("a");
  link.href = "example.pdf"; // your file
  link.download = "example.pdf";
  link.click();
});
