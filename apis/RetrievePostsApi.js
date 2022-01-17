import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const categoryOffsetPostsGET = (
  Constants,
  { category, numberofposts }
) =>
  fetch(
    `https://eftm.com/wp-json/wp/v2/posts?offset=${
      numberofposts || ''
    }&categories=${category || ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useCategoryOffsetPostsGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Posts', args], () =>
    categoryOffsetPostsGET(Constants, args)
  );
};

export const FetchCategoryOffsetPostsGET = ({
  children,
  onData = () => {},
  category,
  numberofposts,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useCategoryOffsetPostsGET({
    category,
    numberofposts,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrievePostCategoriesGET = Constants =>
  fetch(`https://eftm.com/wp-json/wp/v2/categories`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrievePostCategoriesGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Categories', args], () =>
    retrievePostCategoriesGET(Constants, args)
  );
};

export const FetchRetrievePostCategoriesGET = ({
  children,
  onData = () => {},
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrievePostCategoriesGET();

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrievePostsForTagGET = (
  Constants,
  { categoryIDcommaseperated, numbertorequest }
) =>
  fetch(
    `https://eftm.com/wp-json/wp/v2/posts?per_page=${
      numbertorequest || ''
    }&tags=${categoryIDcommaseperated || ''}`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrievePostsForTagGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Posts', args], () =>
    retrievePostsForTagGET(Constants, args)
  );
};

export const FetchRetrievePostsForTagGET = ({
  children,
  onData = () => {},
  categoryIDcommaseperated,
  numbertorequest,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrievePostsForTagGET({
    categoryIDcommaseperated,
    numbertorequest,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrievePostTagsGET = Constants =>
  fetch(`https://eftm.com/wp-json/wp/v2/tags`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrievePostTagsGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Tags', args], () => retrievePostTagsGET(Constants, args));
};

export const FetchRetrievePostTagsGET = ({ children, onData = () => {} }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrievePostTagsGET();

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrieveSinglePostMediaGET = (Constants, { id }) =>
  fetch(`https://eftm.com/wp-json/wp/v2/media/${id || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrieveSinglePostMediaGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Media', args], () =>
    retrieveSinglePostMediaGET(Constants, args)
  );
};

export const FetchRetrieveSinglePostMediaGET = ({
  children,
  onData = () => {},
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrieveSinglePostMediaGET({ id });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrieveLatestPostFromTagGET = (Constants, { tag }) =>
  fetch(`https://eftm.com/wp-json/wp/v2/posts?per_page=1&tags=${tag || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrieveLatestPostFromTagGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Post', args], () =>
    retrieveLatestPostFromTagGET(Constants, args)
  );
};

export const FetchRetrieveLatestPostFromTagGET = ({
  children,
  onData = () => {},
  tag,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrieveLatestPostFromTagGET({ tag });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrieveMediaResolutionsGET = (Constants, { id }) =>
  fetch(`https://eftm.com/wp-json/wp/v2/media/${id || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrieveMediaResolutionsGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Media', args], () =>
    retrieveMediaResolutionsGET(Constants, args)
  );
};

export const FetchRetrieveMediaResolutionsGET = ({
  children,
  onData = () => {},
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrieveMediaResolutionsGET({ id });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};

export const retrievePostsForCategoryGET = (Constants, { categoryID }) =>
  fetch(`https://eftm.com/wp-json/wp/v2/posts?categories=${categoryID || ''}`, {
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json());

export const useRetrievePostsForCategoryGET = args => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Posts', args], () =>
    retrievePostsForCategoryGET(Constants, args)
  );
};

export const FetchRetrievePostsForCategoryGET = ({
  children,
  onData = () => {},
  categoryID,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  const { loading, data, error } = useRetrievePostsForCategoryGET({
    categoryID,
  });

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error });
};
