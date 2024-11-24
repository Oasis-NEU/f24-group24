import React from "react";
import dylan from "../../assets/dylan.jpg";
import kevin from "../../assets/kevin.jpg";
import ash from "../../assets/ash.jpg";

const Aboutpage = () => {
  return (
    <div className="min-h-screen bg-[#f1efef] py-10 px-6">
      {/* Header Section */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#00426c] mb-4">
          About Rate My Plate
        </h1>
      </header>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-[#00426c] mb-6 text-center"></h2>
        <p className="text-[#292423] text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Welcome to <strong>Rate My Plate</strong>, the ultimate dining guide
          for Northeastern students! Our platform helps students find the best
          restaurants near campus that accept Husky Dining Dollars and offer
          special student discounts. With our personalized restaurant
          recommendations, real-time chats, and student-exclusive deals, we make
          dining both convenient and affordable.
        </p>
        <p className="text-[#292423] text-lg leading-relaxed max-w-3xl mx-auto">
          Whether you're looking for a quick bite between classes or a sit-down
          meal with friends, Rate My Plate has something for everyone. Use our
          filters to find restaurants that fit your budget, dietary preferences,
          or location, and enjoy the benefits of being a student.
        </p>
      </section>

      {/* Meet the Developers Section */}
      <section>
        <h2 className="text-3xl font-semibold text-[#00426c] mb-6 text-center">
          Meet the Developers
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Dylan */}
          <div className="bg-[#fbfbfb] rounded-lg shadow-md p-6 border border-[#e2dddd]">
            <div className="h-40 w-full rounded-lg mb-4">
              <img
                src={dylan}
                alt="Dylan Anctil"
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <h4 className="text-xl font-bold text-[#ff4439] mb-2">
              Dylan Anctil
            </h4>
            <p className="text-[#6e5f5e] text-sm">
              Project Lead and Fullstack Developer. Dylan manages both frontend
              and backend integrations, including the real-time chatroom feature
              using Firebase Firestore.
            </p>
          </div>

          {/* Kevin */}
          <div className="bg-[#fbfbfb] rounded-lg shadow-md p-6 border border-[#e2dddd]">
            <div className="h-40 w-full rounded-lg mb-4">
              <img
                src={kevin}
                alt="Kevin Matula"
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <h4 className="text-xl font-bold text-[#ff4439] mb-2">
              Kevin Matula
            </h4>
            <p className="text-[#6e5f5e] text-sm">
              Frontend Developer. Kevin’s expertise in React.js brings life to
              the user interface, making the app easy to navigate and visually
              appealing.
            </p>
          </div>

          {/* Ashvath */}
          <div className="bg-[#fbfbfb] rounded-lg shadow-md p-6 border border-[#e2dddd]">
            <div className="h-40 w-full rounded-lg mb-4">
              <img
                src={ash}
                alt="Ashvath Srinivasan Govindamoorthy"
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <h4 className="text-xl font-bold text-[#ff4439] mb-2">
              Ashvath Srinivasan Govindamoorthy
            </h4>
            <p className="text-[#6e5f5e] text-sm">
              Frontend Developer. Ashvath specializes in Node.js and ensures the
              frontend is smooth and scalable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutpage;
