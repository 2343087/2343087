import React from 'react';
import { motion } from 'framer-motion';
import { IconUser, IconLink } from '@tabler/icons-react';

const Profile = () => {
  return (
    <motion.div 
      className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="https://github.com/2343087.png"
        alt="Avatar"
        className="w-32 h-32 rounded-full border-4 border-gray-200"
      />
      <h1 className="mt-4 text-2xl font-bold">[Nama Pengguna]</h1>
      <div className="flex space-x-4 mt-2">
        <span className="flex items-center text-gray-500">
          <IconUser className="mr-1" />
          [Data Username]
        </span>
        <span className="flex items-center text-gray-500">
          <IconLink className="mr-1" />
          [Data Sosial Media]
        </span>
      </div>
    </motion.div>
  );
};

export default Profile;