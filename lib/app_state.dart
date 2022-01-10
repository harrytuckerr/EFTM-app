import 'package:shared_preferences/shared_preferences.dart';
import 'flutter_flow/lat_lng.dart';

class FFAppState {
  static final FFAppState _instance = FFAppState._internal();

  factory FFAppState() {
    return _instance;
  }

  FFAppState._internal() {
    initializePersistedState();
  }

  Future initializePersistedState() async {
    prefs = await SharedPreferences.getInstance();
    _EFTMID = prefs.getString('ff_EFTMID') ?? _EFTMID;
  }

  SharedPreferences prefs;

  String _EFTMID;
  String get EFTMID => _EFTMID;
  set EFTMID(String _value) {
    _EFTMID = _value;
    prefs.setString('ff_EFTMID', _value);
  }
}

LatLng _latLngFromString(String val) {
  if (val == null) {
    return null;
  }
  final split = val.split(',');
  final lat = double.parse(split.first);
  final lng = double.parse(split.last);
  return LatLng(lat, lng);
}
