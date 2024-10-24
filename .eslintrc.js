module.exports = {
  root: true,
  extends: [
    'next',
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
    // 'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'plugin:styled-components/recommended',
    // 'plugin:stylelint/recommended',
    'prettier',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/react-in-jsx-scope': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/prop-types': 'off',
    semi: ['error', 'never'],
    // '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react-hooks/rules-of-hooks': 0,
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'CredentialsProvider',
      },
    ],
  },
}

/*
FIXME: 
Commented out the code since it is not working. Need to setup styled-components and stylelint.
@typescript-eslint/no-unused-vars has been deactivated since it is faster to do the porting. We need to remove this when we get everything over. 
@typescript-eslint/no-explicit-any has been deactivated since it is faster to do the porting. We need to remove this when we get everything over. 
react-hooks/rules-of-hooks has been deactivated since it is faster to do the porting. We need to remove this when we get everything over. 
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'CredentialsProvider',
      },
    ],
  },
}

/* 
FIXME: Figure out why lint is erroring WITH THE CREDENTIALS PROVIDER. So I disabled the rule for now.
*/
