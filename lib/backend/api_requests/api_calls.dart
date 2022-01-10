import '../../flutter_flow/flutter_flow_util.dart';

import 'api_manager.dart';

export 'api_manager.dart' show ApiCallResponse;

class RetrieveWordpressCategoriesCall {
  static Future<ApiCallResponse> call() {
    return ApiManager.instance.makeApiCall(
      callName: 'Retrieve Wordpress Categories',
      apiUrl: 'https://eftm.com/wp-json/wp/v2/categories',
      callType: ApiCallType.GET,
      headers: {},
      params: {},
      returnBody: true,
    );
  }
}

class RetrieveWordpressTagsCall {
  static Future<ApiCallResponse> call() {
    return ApiManager.instance.makeApiCall(
      callName: 'Retrieve Wordpress Tags',
      apiUrl: 'https://eftm.com/wp-json/wp/v2/tags',
      callType: ApiCallType.GET,
      headers: {},
      params: {},
      returnBody: true,
    );
  }
}

class RetrievePostsForCategoryCall {
  static Future<ApiCallResponse> call({
    String catid = '',
  }) {
    return ApiManager.instance.makeApiCall(
      callName: 'Retrieve Posts for Category',
      apiUrl: 'https://eftm.com/wp-json/wp/v2/posts?categories=${catid}',
      callType: ApiCallType.GET,
      headers: {},
      params: {},
      returnBody: true,
    );
  }
}

class RetrievePostsForTagsCall {
  static Future<ApiCallResponse> call({
    String tag = '8407',
  }) {
    return ApiManager.instance.makeApiCall(
      callName: 'Retrieve Posts for Tags',
      apiUrl: 'https://eftm.com/wp-json/wp/v2/posts?tags=${tag}',
      callType: ApiCallType.GET,
      headers: {},
      params: {},
      returnBody: true,
    );
  }
}

class RetrieveImageURLsForPostCall {
  static Future<ApiCallResponse> call({
    String postid = '220562',
  }) {
    return ApiManager.instance.makeApiCall(
      callName: 'Retrieve Image URLs for post',
      apiUrl: 'https://eftm.com/wp-json/wp/v2/media/${postid}',
      callType: ApiCallType.GET,
      headers: {},
      params: {},
      returnBody: true,
    );
  }
}
