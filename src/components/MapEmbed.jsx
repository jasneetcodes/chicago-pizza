export default function MapEmbed() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.1143017095137!2d-113.94268092246263!3d51.10635123992095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537163fd7cfcc859%3A0xae40181eabcfcb84!2sChicago%20Pizza%20Roma%20-%20Deep%20Dish%20Pizza!5e0!3m2!1sen!2sca!4v1752519097524!5m2!1sen!2sca"
      width="100%"
      height="400"
      className="map"
      style={{ border: 0, paddingTop: 32 }}
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

